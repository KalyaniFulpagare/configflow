import { prisma } from "@/lib/prisma";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

export async function GET() {

  try {

    const session =
      await getServerSession(
        authOptions
      );

    console.log(
      "SESSION:",
      session
    );

    if (!session?.user?.email) {

      return Response.json([]);
    }

    const user =
      await prisma.user.findUnique({

        where: {
          email:
            session.user.email,
        },
      });

    console.log(
      "USER:",
      user
    );

    if (!user) {

      return Response.json([]);
    }

    const configs =
      await prisma.config.findMany({

        where: {
          userId: user.id,
        },

        orderBy: {
          createdAt: "desc",
        },
      });

    return Response.json(
      configs
    );

  } catch (error) {

    console.log(
      "GET ERROR:",
      error
    );

    return Response.json([]);
  }
}

export async function POST(
  req: Request
) {

  try {

    console.log(
      "POST HIT"
    );

    const session =
      await getServerSession(
        authOptions
      );

    console.log(
      "SESSION:",
      session
    );

    if (!session?.user?.email) {

      return Response.json(
        {
          error:
            "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const body =
      await req.json();

    console.log(
      "BODY:",
      body
    );

    const user =
      await prisma.user.findUnique({

        where: {
          email:
            session.user.email,
        },
      });

    console.log(
      "USER:",
      user
    );

    if (!user) {

      return Response.json(
        {
          error:
            "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const config =
      await prisma.config.create({

        data: {

          name:
            body.name,

          content:
            body.content,

          userId:
            user.id,
        },
      });

    console.log(
      "CONFIG SAVED:",
      config
    );

    return Response.json(
      config
    );

  } catch (error) {

    console.log(
      "POST ERROR:",
      error
    );

    return Response.json(
      {
        error:
          "Failed to save",
      },
      {
        status: 500,
      }
    );
  }
}