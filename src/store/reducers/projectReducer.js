const initState = [
    {
        id: "1",
        title: "Zrob cos1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum porro quod dolor laboriosam ducimus omnis minima at molestiae iste exercitationem nesciunt nihil suscipit tenetur, ab eaque maiores illum! Placeat."
    },
    {
        id: "2",
        title: "Zrob cos2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum porro quod dolor laboriosam ducimus omnis minima at molestiae iste exercitationem nesciunt nihil suscipit tenetur, ab eaque maiores illum! Placeat."
    },
    {
        id: "3",
        title: "Zrob cos3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum porro quod dolor laboriosam ducimus omnis minima at molestiae iste exercitationem nesciunt nihil suscipit tenetur, ab eaque maiores illum! Placeat."
    }
];



const projectReducer = (state=initState, action)  => {
    switch (action.type) {
        case "DELETE_PROJECT":
            return state.filter( item => item.id !== action.id);
        default:
            return state;
    }
    
}

export default projectReducer;