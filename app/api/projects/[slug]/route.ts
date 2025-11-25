import { NextResponse, NextRequest } from "next/server";
import { getProjectsDataBySlug } from "@/services/projects";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;

    const data = await getProjectsDataBySlug(slug);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET /api/projects/[slug] error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
