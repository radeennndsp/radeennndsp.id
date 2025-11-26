import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/common/utils/server";

export async function DELETE(request: NextRequest, context: any) {
  const { slug } = await context.params;

  const supabase = await createClient();

  const { error } = await supabase.from("chat").delete().eq("id", slug);

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
}
