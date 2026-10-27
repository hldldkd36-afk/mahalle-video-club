import {cookies} from 'next/headers'; import crypto from 'crypto';
const secret=process.env.AUTH_SECRET||'dev-secret';
export function sign(value:string){return crypto.createHmac('sha256',secret).update(value).digest('hex')}
export async function setAdminSession(username:string){const c=await cookies(); c.set('mah_admin',`${username}.${sign(username)}`,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:60*60*24*7})}
export async function isAdmin(){const c=await cookies();const v=c.get('mah_admin')?.value;if(!v)return false;const [u,s]=v.split('.');return !!u&&s===sign(u)}
export async function clearSession(){(await cookies()).delete('mah_admin')}
