import axios from "./lib/axios";
import { create } from "zustand";

type pitch = {"_id":string,
"title":string,
"coverImageUrl":string,
"about":string,
"tag":string,
"amountRaised":string,
"contentImagesUrls":string[],
"pdfFileUrl":string,
"createdAt":string,
"updatedAt":string,
"__v": number}


type StoreState = {
  loading: boolean;
  token: string;
  link: string;
  users: [];
  user: {}
  isLogged: boolean,
  showLogin: boolean,
  showData: boolean,
  tags: [],
  images: [],
  pitch: pitch,
  pitches: pitch[],
  

};

const initialState: StoreState = {
  loading: false,
  token: "",
  link: `/pitch-decks`,
  users: [],
  user: {},
  isLogged: false,
  showLogin: false,
  showData: false,
  tags: [],
  images: [], 
  pitch:  {"_id":"",
  "title":"",
  "coverImageUrl":"",
  "about":"",
  "tag":"",
  "amountRaised":"",
  "contentImagesUrls":[],
  "pdfFileUrl":"",
  "createdAt":"",
  "updatedAt":"",
  "__v": 0},
  pitches: [],
};

interface Store extends StoreState {
  setUser: (user: {}) => void;
  setlink: (link: "") => void;
  setTags: (tags: []) => void;
  setImages: (images: []) => void;
  setToken: (token: string) => void;
  setShowLogin: (show: boolean) => void;
  setShowData: (show: boolean) => void;
  setIsLoggedin: (status: boolean) => void;
  setIsLoading: (status: boolean) => void;
  fetchSinglePitch: (id: string) => void;
  fetchPitches: (pitches: pitch[]) => void;
  // fetchPitches: () => void;
  resetState: () => void;
}

export const store = create<Store>((set, get) => ({
  ...initialState,
 

  resetState: () => set(initialState),

  setToken: (token) => {  set((_state) => ({ token: token})) },
  setShowLogin: (show) => {  set((state) => ({ showLogin : show})) },
  setShowData: (show) => {  set((state) => ({ showData : show})) },
  setIsLoggedin: (status) => {  set((state) => ({isLogged  : status  }))},
  setIsLoading: (status) => {  set((state) => ({loading  : status  }))},
  setlink: (link) => {  set((state) => ({ link : link})) },

  
  setUser: (user)=> { set((state) => ({  user: user  })) },

  // Temporary Use
  setTags: (tags)=> { set((state) => ({  tags: tags  })) },
  setImages: (images)=> { set((state) => ({  images: images  })) },
  
  
  // fetchPitches: () => {
  //   set({ loading: true });
  //   try {
  //     axios.get(`/pitch/getAll`)
  //     // Update the state with the fetched data
  //     .then(function (response) {
  //  set({ pitches: response.data.pitchDeck, loading: false });
  //     })
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     set({ loading: false });
  //   }
  // },

  fetchPitches: (response) => {  set((state) => ({ pitches: response, loading: false }))},

  fetchSinglePitch: async (id: string) => {
    set({ loading: true });
    console.log(get().token, id)
    try {
      await axios.get(`/pitch/user/get/${id}`,
      { headers: {
        'Authorization': `Bearer ${get().token}`,
        'Content-Type': 'application/json', // Adjust the content type based on your API requirements
      }})

      // Update the state with the fetched data
      .then(function (response) {
   set({ pitch: response.data.pitchDeck, loading: false });
      })
    } catch (error) {
      console.error('Error fetching data:', error);
      set({ loading: false });
    }
  },
}));

function then(arg0: (res: any) => void) {
  throw new Error("Function not implemented.");
}
