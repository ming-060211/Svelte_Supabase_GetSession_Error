import {supabase} from "../lib/SupabaseClient.js";

export const load = async ({ locals: { getSession } }) => {
    return {
        session: await getSession(),
    }
}