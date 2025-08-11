// import { resolvers } from "@/graphql/schema/resolvers";
// import { typeDefs } from "@/graphql/schema/typeDefs";
// import { createYoga, createSchema } from "graphql-yoga";
// import { NextRequest } from "next/server";

// const schema = createSchema({
//   typeDefs,
//   resolvers,
// });

// const yoga = createYoga<{ req: NextRequest }>({
//   schema,
//   graphqlEndpoint: "/api/graphql",
//   context: async ({ request }) => {
//     const token = request.headers.get("authorization") || "";
//     return { token };
//   },
// });

// export { yoga as GET, yoga as POST };


import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GraphQL API belum tersedia" });
}

