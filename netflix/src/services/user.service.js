import { getMiddlewareManifest } from "next/dist/client/route-loader";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

/* eslint-disable import/no-anonymous-default-export */
const apiUrl = "http://localhost:1337/api";
export default {
    register(payload) {

        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min +1)) + min;
          }
        console.log(getRandomIntInclusive(1, 9999999999));
        
    },
}