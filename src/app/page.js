import { getClient } from "./lib/client";
import { gql } from "apollo-server-micro";

const query = gql`
    query data {
        countries {
            name
        }
    }
`;

export default async function Page() {
    const { data } = await getClient().query({ query });

    return (
        <main>
            <ul>
                {data.countries.map((country) => (
                    <li>{country.name}</li>
                ))}
            </ul>
        </main>
    );
}
