import { FETCH_MOVIE_REQ, FETCH_MOVIE_SUCESS, FETCH_AREA } from '../actions/index';

export const initialstate = {
	loading: false,
	movieList: [],
	areaList: [

		{
			"ID": "1038",
			"Name": "Espoo: SELLO",
			"coordinates": [60.218380, 24.808380],
			"address": "Ratsukatu 3, 02600 Espoo"
		},
		{
			"ID": "1045",
			"Name": "Helsinki: ITIS",
			"coordinates": [60.213150, 25.085190],
			"address": "Itäkatu 1-7, 00930 Helsinki"
		},
		{
			"ID": "1031",
			"Name": "Helsinki: KINOPALATSI",
			"coordinates": [60.171200, 24.946280],
			"address": "Kaisaniemenkatu 2, 00100 Helsinki"
		},
		// {
		// 	"ID": "1032",
		// 	"Name": "Helsinki: MAXIM",
		// 	"coordinates": [60.168339, 24.947880],
		// 	"address": "Kluuvikatu 1 00100 Helsinki"
		// },
		{
			"ID": "1033",
			"Name": "Helsinki: TENNISPALATSI",
			"coordinates": [60.169579, 24.930500],
			"address": "Salomonkatu 15, 00100 Helsinki"
		},
		{
			"ID": "1013",
			"Name": "Vantaa: FLAMINGO",
			"coordinates": [60.290791, 24.969090],
			"address": "Tasetie 8, 01510 Vantaa"
		},
		{
			"ID": "1015",
			"Name": "Jyväskylä: FANTASIA",
			"coordinates": [62.242512, 25.745911],
			"address": "Kauppakatu 29-31, 40100 Jyväskylä"
		},
		{
			"ID": "1016",
			"Name": "Kuopio: SCALA",
			"coordinates": [62.890570, 27.675550],
			"address": "Ajurinkatu 16, 70110, Kuopio"
		},
		{
			"ID": "1017",
			"Name": "Lahti: KUVAPALATSI",
			"coordinates": [60.983452, 25.660151],
			"address": "Vapaudenkatu 13, 15110 Lahti"
		},
		{
			"ID": "1041",
			"Name": "Lappeenranta: STRAND",
			"coordinates": [61.056648, 28.193590],
			"address": "Brahenkatu 5, 53100 Lappeenranta"
		},
		{
			"ID": "1018",
			"Name": "Oulu: PLAZA",
			"coordinates": [65.011160, 25.465250],
			"address": "Torikatu 32, 90100 Oulu"
		},
		{
			"ID": "1019",
			"Name": "Pori: PROMENADI",
			"coordinates": [61.484080, 21.796820],
			"address": "Yrjönkatu 17, 28100, Pori"
		},

		{
			"ID": "1034",
			"Name": "Tampere: CINE ATLAS",
			"coordinates": [61.495590, 23.767710],
			"address": "Koskikeskus, Hatanpään Valtatie 1, 33100, Tampere"
		},
		{
			"ID": "1035",
			"Name": "Tampere: PLEVNA",
			"coordinates": [61.501690, 23.758580],
			"address": "Itäinenkatu 4, 33210, Tampere"
		},
		{
			"ID": "1022",
			"Name": "Turku: KINOPALATSI",
			"coordinates": [60.451900, 22.268320],
			"address": "Kauppiaskatu 11, 20100 Turku"
		}]
};
export default function (state = initialstate, action) {
	switch (action.type) {
		case FETCH_MOVIE_REQ:
			return {
				...state,
				loading: true,
			};
		case FETCH_MOVIE_SUCESS:
			return {
				...state,
				loading: false,
				movieList: action.payload,
			};
		case FETCH_AREA:
			return {
				...state,
				loading: true,
				areaList: state.areaList
			};
		case null:
			return state;

		default:
			return state;
	}
}
