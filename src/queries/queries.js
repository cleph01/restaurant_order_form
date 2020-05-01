import { gql } from "apollo-boost";

const getBusinessInfo = gql`
    query($businessId: ID!) {
        getBusinessInfo(businessId: $businessId) {
            businessId
            businessName
            address
            city
            state
            zipCode
            phoneNumber
            website
            latitude
            longitude
            menuItems {
                menuId
                category
                itemName
                description
                price
                soldOut
            }
        }
    }
`;

// const addClassMutation = gql`
//     mutation($title:String,
//             $description:String,
//             $startAt:String,
//             $endAt:String,
//             $recurring:Boolean,
//             $recurringDays:String,
//             $instructorId:String
//         ){
//         addClass(
//             title:$title,
//             description:$description,
//             startAt:$startAt,
//             endAt:$endAt,
//             recurring:$recurring,
//             recurringDays:$recurringDays,
//             instructorId:$instructorId
//         )
//             {
//                 id
//                 title

//             }
// }
// `

export { getBusinessInfo };
