import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/common/utils/server";

export async function DELETE(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  const supabase = await createClient();

  try {
    const { slug } = context.params;

    await supabase.from("messages").delete().eq("id", slug);

    return NextResponse.json("Data deleted successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
