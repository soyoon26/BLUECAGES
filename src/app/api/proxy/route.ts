// /api/proxy.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json(
        { error: "Query parameter is missing" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ALADIN_API_KEY;
    if (!apiKey) {
      console.error("Missing ALADIN_API_KEY.");
      return NextResponse.json(
        { error: "Missing ALADIN_API_KEY environment variable" },
        { status: 500 }
      );
    }

    const apiUrl = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${apiKey}&Query=${encodeURIComponent(
      query
    )}&QueryType=Title&MaxResults=1&SearchTarget=Book&output=js`;

    const response = await fetch(apiUrl);
    const text = await response.text();

    const sanitizedText = text
      .trim()
      .replace(/^[^\{]+/, "")
      .replace(/[^\}]+$/, "");

    let data;
    try {
      data = JSON.parse(sanitizedText);
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to parse JSON response", rawResponse: sanitizedText },
        { status: 500 }
      );
    }

    if (!data.item || data.item.length === 0) {
      return NextResponse.json(
        { error: "No results found for the query", query },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
