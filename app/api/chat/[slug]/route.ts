import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/common/utils/server";

export async function DELETE(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const supabase = await createClient();
  const slug = context.params.slug;

  try {
    const { error } = await supabase
      .from("chat")
      .delete()
      .eq("id", slug);

    if (error) {
      return NextResponse.json(
        { message: "Failed to delete chat", error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Chat deleted successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
