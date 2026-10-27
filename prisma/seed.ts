import { PrismaClient } from '@prisma/client'; import bcrypt from 'bcryptjs';
const db=new PrismaClient();
async function main(){
 const passwordHash=await bcrypt.hash('ChangeMe123!',12); await db.user.upsert({where:{username:'admin'},update:{},create:{username:'admin',passwordHash}});
 for(const [name,slug] of [['Iranian Movies','iranian'],['Foreign Movies','foreign'],['TV Series','series']]) await db.category.upsert({where:{slug},update:{},create:{name,slug}});
 for(const name of ['Action','Comedy','Drama','Horror','Romance','Thriller','Crime','Science Fiction','Fantasy','Documentary','Animation','Family','Adventure']) await db.genre.upsert({where:{name},update:{},create:{name}});
 const genre=await db.genre.findUnique({where:{name:'Science Fiction'}});
 await db.movie.upsert({where:{slug:'the-last-lantern'},update:{},create:{slug:'the-last-lantern',title:'The Last Lantern',year:2026,country:'Demo',description:'A fictional demonstration movie for the Mahalle video club.',posterUrl:'/poster-placeholder.svg',hlsUrl:'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',published:true,publishedAt:new Date(),genres:genre?{connect:[{id:genre.id}]}:undefined}});
 const s=await db.series.upsert({where:{slug:'city-of-stars'},update:{},create:{slug:'city-of-stars',title:'City of Stars',year:2026,country:'Demo',description:'A fictional demonstration series.',posterUrl:'/poster-placeholder.svg',published:true,publishedAt:new Date()}});
 await db.season.upsert({where:{seriesId_number:{seriesId:s.id,number:1}},update:{},create:{seriesId:s.id,number:1,episodes:{create:[{number:1,title:'Pilot',hlsUrl:'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',published:true},{number:2,title:'Second Night',hlsUrl:'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',published:true}]}}});
}
main().finally(()=>db.$disconnect());
