import {fail} from "@sveltejs/kit";

export const actions ={
    register: async({request, url, locals: {supabase}, cookies} ) => {
        const formData = await request.formData()
        const email = formData.get('email')
        const password = formData.get('password')
        console.log("hello")

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${url.origin}/api/auth/callback`,
            },
        })


        if (error) {
            console.log(error.message)
            return fail(500, { message: 'Server error. Try again later.', success: false, email })
        }
    }
}