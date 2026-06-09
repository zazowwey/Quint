import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resendEmail = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {

    try {
        const { to, subject, html } = await request.json();

        const { data, error } = await resendEmail.emails.send ({
            from:'quint@resend.dev',
            to,
            subject,
            html,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        
        return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
    
    } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

}