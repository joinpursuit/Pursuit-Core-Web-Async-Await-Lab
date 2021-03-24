async function useFunc(param) {
    param = await axios.get("https://randomapi")

}
let myParam = useFunc(param)