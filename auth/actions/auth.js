'use server';


import { hashUserPassword, verifyPassword } from '@/lib/hash';
import { redirect } from "next/navigation";
import { createAuthSession, logout as libLogout } from "@/lib/auth";
import { createUser, getUserByEmail } from '@/lib/user';

export async function  signup(privState, formData) {
	const email = formData.get('email');
	const password = formData.get('password');

	let errors = {};

	if (!email.includes('@')) {
		errors.email = 'the email is invalid';
	}

	if (password.trim().length < 8) {
		errors.password = 'the password is too short';
	}
	if (Object.keys(errors).length > 0) {
		return { errors };
	}

    const hashedPassword = hashUserPassword(password)

    try {    
        const id = createUser(email, hashedPassword)
        await createAuthSession(id)
    } catch (error) {
        if(error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return {
                errors: {
                    email: 'email already in use'
                }
            }
        }
    }

    redirect('/training');
};

export async function login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
  
    const existingUser = getUserByEmail(email);
  
    if (!existingUser) {
      return {
        errors: {
          email: 'Could not authenticate user, please check your credentials.',
        },
      };
    }
  
    const isValidPassword = verifyPassword(existingUser.password, password);
  
    if (!isValidPassword) {
      return {
        errors: {
          password: 'Could not authenticate user, please check your credentials.',
        },
      };
    }
  
    await createAuthSession(existingUser.id);
    redirect('/training');
  }
  
  export async function auth(mode, prevState, formData) {
    if (mode === 'login') {
      return login(prevState, formData);
    }
    return signup(prevState, formData);
  }

  export async function logout(params) {
    libLogout()
    redirect('/')
  }

