import {
    FETCH_BUSINESS_DATA_START,
    FETCH_BUSINESS_DATA_SUCCESS,
    FETCH_BUSINESS_DATA_ERROR,
} from "../actions/BusinessData";

const initialState = {
    businessInfo: {
        businessName: "Mecha Noodle Bar",
        address: "116 Washington Street",
        city: "Norwalk",
        state: "CT",
        zipcode: "06854",
        tel: "203.295.8718",
        website: "https://mechanoodle.com",
    },
    products: [
        {
            category: "apps",
            content: [
                {
                    name: "KFC",
                    description: "KFC description",
                },
                {
                    name: "Pork Belly Bao",
                    description: "Pork Belly Bao description",
                },
                {
                    name: "Shiitake Bao",
                    description: "Shiitake Bao description",
                },
            ],
        },
        {
            category: "noodles",
            content: [
                {
                    name: "Pha Ga",
                    description: "Pha Ga description",
                },
                {
                    name: "Tonkutsu 2.0",
                    description: "Tonkutsu description",
                },
                {
                    name: "Spicey Miso",
                    description: "Spicey Miso description",
                },
            ],
        },
        {
            category: "non-alcoholic beverages",
            content: [
                {
                    name: "Coke",
                },
                {
                    name: "Gingerale",
                },
                {
                    name: "Mexican Sprite",
                },
            ],
        },
    ],
    isLoading: false,
    error: null,
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BUSINESS_DATA_START:
            return {
                ...state,
                isLoading: true,
            };

        case FETCH_BUSINESS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                image: action.payload,
            };

        case FETCH_BUSINESS_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            state.products.map((item) => (item.visible = true));

            return state;
    }
}
