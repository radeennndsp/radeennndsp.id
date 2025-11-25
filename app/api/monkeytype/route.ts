import { NextResponse } from "next/server";

import { getMonkeytypeData } from "@/services/monkeytype";

export const GET = async () => {
  try {
    const response = await getMonkeytypeData();
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Monkeytype API error:", errorMessage);
    return NextResponse.json(
      { message: "Internal Server Error", error: errorMessage },
      { status: 500 },
    );
  }
};
