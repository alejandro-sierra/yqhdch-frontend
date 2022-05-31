
export const DishDetails = () => {

    const [recipe, setRecipe] = useState([])
    
    useEffect(() => {
        (async () => {
            await axios.get(apiRouteBase + `/api/recipes/${id}`)
                .then(response => setRecipe(response.data))
        })()
    }, [])

    return(
        <></>
    )
}