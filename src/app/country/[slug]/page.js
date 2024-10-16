import { getClient } from "@/app/lib/client";
import { gql } from "apollo-server-micro";

const query = gql`
    query data {
        countries {
            name
            phones
            native
            awsRegion
            capital
            emoji
            emojiU
            code
            currency
            currencies
            continent {
                name
                code
            }
            subdivisions {
                name
                emoji
                code
            }
            languages {
                name
                native
                code
                rtl
            }
            states {
                name
                code
            }
        }
    }
`;

export default async function Country({ params }) {
    const { data } = await getClient().query({ query });
    const index = params.slug;
    const dataArr = data.countries[index];

    return (
        <div>
            <ul>
                <li data-name="Country Name :">{dataArr.name}</li>
                <li data-name="Phones :">{dataArr.phones}</li>
                <li data-name="Native :">{dataArr.native}</li>
                <li data-name="Capital :">{dataArr.capital}</li>
                <li data-name="Emoji :">{dataArr.emoji}</li>
                <li data-name="Code :">{dataArr.code}</li>
                <li data-name="Currency :">{dataArr.currency}</li>
                <li data-name="Currencies :">{dataArr.currencies}</li>
                <li data-name="Continent Name :">{dataArr.continent.name}</li>
                <li data-name="Continent Code :">{dataArr.continent.code}</li>
            </ul>

            <ul>
                {dataArr.subdivisions.map((el) => (
                    <>
                        <li data-name="Subdivisions Name :">{el.name}</li>
                        <li data-name="Subdivisions Emoji :">{el.emoji}</li>
                        <li data-name="Subdivisions Code :">{el.code}</li>
                    </>
                ))}
            </ul>

            <ul>
                {dataArr.languages.map((el) => (
                    <>
                        <li data-name="Languages Name :">{el.name}</li>
                        <li data-name="Languages Native :">{el.native}</li>
                        <li data-name="Languages Code :">{el.code}</li>
                        <li data-name="Languages Rtl :">{el.rtl}</li>
                    </>
                ))}
            </ul>

            <ul>
                {dataArr.states.map((el) => (
                    <>
                        <li data-name="States Name :">{el.name}</li>
                        <li data-name="States Code :">{el.code}</li>
                    </>
                ))}
            </ul>
        </div>
    );
}
