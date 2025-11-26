import { createClient } from "@/common/utils/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase = await createClient(); 
  try {
    const { data, error } = await supabase
      .from("messages")
      .select()
      .order("created_at", { ascending: true });

    if (error) {
      return NextResponse.json(
        { message: "Failed to get data", error },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  const supabase = await createClient();
  try {
    const body = await req.json();

    const { error } = await supabase
      .from("messages")
      .insert(body); 

    if (error) {
      return NextResponse.json(
        { message: "Failed to store message", error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message created successfully" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
