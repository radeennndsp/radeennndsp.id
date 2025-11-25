import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/common/utils/server";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params; // ← HARUS await

  const supabase = await createClient();

  try {
    await supabase.from("messages").delete().eq("id", slug);

    return NextResponse.json("Data deleted successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
