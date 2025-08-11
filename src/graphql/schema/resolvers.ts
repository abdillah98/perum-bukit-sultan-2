// const POCKETBASE_URL = "http://127.0.0.1:8090";

// export const resolvers = {
//     Query: {
//         roles: async (_: any, args: any, context: any) => {
//             const res = await fetch(
//                 `${POCKETBASE_URL}/api/collections/roles/records`,
//                 {
//                     headers: {
//                         Authorization: context.token,
//                     },
//                 }
//             );
//             const json = await res.json();
//             return json.items;
//         },
//         role: async (_: any, { id }: { id: string }, context: any) => {
//             const res = await fetch(
//                 `${POCKETBASE_URL}/api/collections/roles/records/${id}`,
//                 {
//                     headers: {
//                         Authorization: context.token,
//                     },
//                 }
//             );
//             if (!res.ok) return null;
//             return await res.json();
//         },
//         categories: async (_: any, args: any, context: any) => {
//             const res = await fetch(
//                 `${POCKETBASE_URL}/api/collections/categories/records`,
//                 {
//                     headers: {
//                         Authorization: context.token,
//                     },
//                 }
//             );
//             const json = await res.json();
//             return json.items;
//         },
//         category: async (_: any, { id }: { id: string }, context: any) => {
//             const res = await fetch(
//                 `${POCKETBASE_URL}/api/collections/categories/records/${id}`,
//                 {
//                     headers: {
//                         Authorization: context.token,
//                     },
//                 }
//             );
//             if (!res.ok) return null;
//             return await res.json();
//         },
//     },
//     Mutation: {
//         createRole: async (_: any, { name, description }: { name: string, description: string }, context: any) => {
//             const res = await fetch(`${POCKETBASE_URL}/api/collections/roles/records`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: context.token,
//                 },
//                 body: JSON.stringify({ name, description }),
//             });
//             return await res.json();
//         },
//         updateRole: async (_: any, { id, name, description }: { id: string; name: string, description: string }, context: any) => {
//             const res = await fetch(`${POCKETBASE_URL}/api/collections/roles/records/${id}`, {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: context.token,
//                 },
//                 body: JSON.stringify({ name, description }),
//             });
//             return await res.json();
//         },
//         deleteRole: async (_: any, { id }: { id: string }, context: any) => {
//             const res = await fetch(`${POCKETBASE_URL}/api/collections/roles/records/${id}`, {
//                 method: "DELETE",
//                 headers: {
//                     Authorization: context.token,
//                 },
//             });
//             return res.ok;
//         },
//         createCategory: async (_: any, { name }: { name: string }, context: any) => {
//             const res = await fetch(`${POCKETBASE_URL}/api/collections/categories/records`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: context.token,
//                 },
//                 body: JSON.stringify({ name }),
//             });
//             return await res.json();
//         },
//         updateCategory: async (_: any, { id, name }: { id: string; name: string }, context: any) => {
//             const res = await fetch(`${POCKETBASE_URL}/api/collections/categories/records/${id}`, {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: context.token,
//                 },
//                 body: JSON.stringify({ name }),
//             });
//             return await res.json();
//         },
//         deleteCategory: async (_: any, { id }: { id: string }, context: any) => {
//             const res = await fetch(`${POCKETBASE_URL}/api/collections/categories/records/${id}`, {
//                 method: "DELETE",
//                 headers: {
//                     Authorization: context.token,
//                 },
//             });
//             return res.ok;
//         },
//     },
// };
