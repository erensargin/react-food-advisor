export const data = [
    {
        id: 1,
        name: 'Pilav',
        ingredients: ['rice', 'butter', 'oil'],
        prep: 'First boil the water then add rice in it',
        imgurl: 'https://media.istockphoto.com/photos/cooked-rice-picture-id491090528?k=20&m=491090528&s=612x612&w=0&h=oKwbkVWhU_17ZBhB4v3SKOTGT85nmi2YS7KbPPa-x8o='
    },
    {
        id: 2,
        name: 'Ham Sandwich',
        ingredients: ['Ham', 'Cheese',],
        prep: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imgurl: 'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2019-08/classic-sandwich-bread.jpg?itok=ZA2g6TUf'
    },
    {
        id: 3,
        name: 'Ham Sandwich',
        ingredients: ['Ham', 'Cheese',],
        prep: 'Cut breads and put cheese and add ham',
        imgurl: 'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2019-08/classic-sandwich-bread.jpg?itok=ZA2g6TUf'
    },
]

export function getData(id) {
    return data.find((d) => d.id === id)
}