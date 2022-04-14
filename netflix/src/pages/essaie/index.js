

const Index = () => {

    var element='{"name":"John", "age":30, "city":"New York"}'
    const obj= JSON.parse(element);

    element={"name": obj.name, "age":obj.age, "city":obj.city, "prenom":"Lucas"}

    console.log(element);
    
    return(
        <>
        </>
    )
}
export default Index;