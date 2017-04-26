import Config from '../Config'
import api from '../api'

export const HOME = 'HOME'
export const RECOMMENDMUSIC = 'RECOMMENDMUSIC'


export function homeAPI(){

	return async dispatch => {
	 	try{
	 		let data ={}
	 		let banner = await api( Config.bannerAPI )
	 		let musicList = await api( Config.musicListAPI,'get',{page:1,json:true} )
	 		data.banner = banner.data.info
	 		data.recommendMusics = musicList.plist.list.info
		 	dispatch(home(data))
		 }catch(error){
			console.log('error',error);
		}
	}
}

export const home = (obj) =>{
	return {
		type: HOME,
		obj
	}
}

export const recommendMusic = (obj) =>{
	return {
		type: RECOMMENDMUSIC,
		obj
	}
}
