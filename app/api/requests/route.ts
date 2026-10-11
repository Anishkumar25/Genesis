import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// SAFETY DIRECTIVE:
// Only need_type and district are accepted and stored.
// Any extra payload keys (names, phones, IP notes) are stripped away.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { need_type, district } = body;

    const allowedNeeds = ["legal_help", "counselling", "shelter", "financial_training"];

    if (!need_type || !allowedNeeds.includes(need_type)) {
      return NextResponse.json(
        { error: "Invalid need_type specified" },
        { status: 400 }
      );
    }

    if (!district || typeof district !== "string") {
      return NextResponse.json(
        { error: "District is required" },
        { status: 400 }
      );
    }

    const sanitizedDistrict = district.trim().slice(0, 100);

    // If Supabase is live, store it in service_requests table
    try {
      const supabase = createServerSupabaseClient();
      await supabase.from("service_requests").insert([
        {
          need_type,
          district: sanitizedDistrict,
          status: "new",
          is_sample: true,
        },
      ]);
    } catch {
      // In offline / fallback prototype mode, request succeeds without crashing
    }

    return NextResponse.json({
      success: true,
      message: "Anonymous capacity ping registered. No personal identifiable data stored.",
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process anonymous request" },
      { status: 500 }
    );
  }
}
