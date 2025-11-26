import { NextResponse } from "next/server";
import { createClient } from "@/common/utils/server";

export const DELETE = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  // pastikan supabase client siap
  const supabase = await createClient(); // ⬅ WAJIB pakai await

  try {
    const id = params.slug;

    const { error } = await supabase
      .from("messages")
      .delete()
      .eq("id", id);

    if (error) {
      return NextResponse.json(
        { message: "Failed to delete data", error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Data deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
