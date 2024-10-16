import { getClient } from "../lib/client";
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

export default async function Country() {
    const { data } = await getClient().query({ query });

    return (
        <main>
            <ul>
                {data.countries.map((country, index) => (
                    <li>
                        <a href={`/country/${index}`}>{country.name}</a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
