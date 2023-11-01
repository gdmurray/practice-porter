import * as crypto from "crypto";

interface Hash {
    iv: string;
    secret: string;
    content: string;
}

const algorithm = "aes-256-ctr";

const serviceAccountHash: Hash = {
    iv: process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_IV,
    secret: process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_SECRET,
    content:
        "548365a00c9fc643d59aeca542a81a0e522dbdd4f1060ef4ed97172b27250ec2ecfd84d8947de629baf815071500691548aa8127e756f480ba2e7bb3f522a89fec3ac6b699813932f81df2771d6537f047885e89ee1e0e4396d0059046109ab554f7914d6bc3d3989fdd05d7e4d96d26b55ae7d0fcf7850778babfa172215efc1acab22d424068ac156c081674bc55fa01dfdeab1ee7ce27ea1a82328abcbfe4d668f4419c1a7e7699b71b7e54385e30bae5d42515d78e7d906e6d30311ffd7b43f5f27db2ff080c46a6e46125400d831ae2382a89ad7e12d9130e0a48d602967cf16bfac89730e72dd8c82e6c45fd7b3ce6250fec00151c19dbf4a2e9deb257e960acd5c1f87587aac5bf7535e280a63e0aadfad3daa7353e97eb6644e30c927012511e66b4de1ab218ea5aa59697aa83be686059698a4093077a2b3871505b7f18708ed2df13c042fdf1baa8ffde692973194cf6d8825829fc6e8049f6d8154077ba27a0e126592d5b122b00da07e83bd2918a3dd33349e5ece5c3d368e2f87f7d13267fedb77c4a734fe96904075ba4a454c76af0713f67d5e59e6327811130b5b63dcc4f379a6a9e050c8285a665fadc379b0a620e7e45613607d2def92694434e13682caf8f7d08f15a657a7efda68f1a1eaa3caa81462e77ad38b1a77e6002e942bb4a64b14a9e1b7fe5b8e9c14a472f5b8ed5650f5acda488d99d88f7a4103b285883616800f570292f5e6cab508642dc3458d643e2b043533553561e4b0aa0f907a333a6a71eae6b9373bfd6a1e454d098d8b57dd4e94425c79d2280f77b04ed3fbd6e9795ab9a25eb7b993a17af7a2d62c048922a10b6fc52e1504077a9c7b801d0d412ff226adb00e61f970fe896da8ec655e7e2b7cae01d956d817fef0e6e0baa06fa8fa16bc74dc40cd07d69b49b378b61e076a2aba3926add99348fbd1af050e5f99b965dd4604dbddcf02b147b1c172532a218fae25ba2e96bb45be2667f74d62522c9192f176e7847552910fbb10260f37ab2de756258e1902ce41070bd18696c74a9d23a69c58515873f559ad5ecbe181900eb2ef1209dbe923279b624ebbcd6b30c6c720017a7d5c82551e271df4f64c5b994ebad749367e86ea7c87a74eadc6c06eeae62fdbd23ae13735af17f77a6de21ae42e34d766dc3c6af2acef81cb796af750f24e03838a9e812e52ef1f9112cb21870823c26dc9ab89ec3fdd67eaba532af5b9f053e414548e65eb39d01e31035cd4107ba2df6611964917af70816d03c28f1c89449edec2354e74c7e8f80796c69aebaaf1c05c3fb5d4b1c2921fb1b53153ba48a1a733b0227abd41fd9a4a2d0d402bbd3939de4482d6d48a4d82cf12d2959179a1eb1147a96c611150148ba7c42d1581cd44d217bce7e5148239da8f1133a72a38941e24f4756af97330c6981bd75cdf7aef69bbe2099324e34f170922f0ab0c521c1a6c8333e8781fc80ca5302beb2afa2b3cd242b7da32a5340671bc63cc3772d387f01ae3671c91d50ab809b6e7de6f9b39369ac3388e27f5225c5126df0f859a3f1637b16b0f523fbb57658a59239a3d917aadc51e0e8d472119cb57bdd12c6d0ad6fb432686df346d80d9157e445ed7bbd52691f56a278bf64d2b926828660ecbc1932b1959d85e745e462a2fe5932ada53171f87f86fb854c1a5f4926e1f713905bb8cedbaa9d40e1efe2843582def29b308425e2fc08387d51c47590c62c388433b7f66189736682cdf455e6797db36af68c7255f4cd8c31738101461af85565c453d3a5ffd78dad96438394cefc893b8400f89008097fd42308ebe4524b20537f32ce492c5a22ccaec94b8a747f7370ba385a5791eb474d09c0d2439ce5ccc3fcfbcbb40ddee6741d267bf72ee9d25d061504247916b786c6bde45dba6bf7ed14b8a5b1f3466abb6fd5da27110c60e163d1e63ba0283af0a70566e2372aa275dfbbd999ec97c0f9a5c929d7f821177e0b5e6dc794d481919ea7dbd6aa538af8c76e2f1e6203b89ab7c1dbdcd6098d59e08d0af64b5f9dded8742b17572216a1df003cc1a7de7eb4195022b3a687f514d7c75d72b29a4d1db179b5c72347ed4fa5ee12ffbace5117624b2325620a60dc0997aa1d57c0e399bebc5a56169620b0008ce9ea7e97d1dffa2351bd02cb607058a9ef998e73b87a42ea2fa314441e73fe2faf4e74aaf856f4de303cf48a09d0786135bb957607282b4cd773c592f133e0e31ec29579db9286f6904521bf3cddc022539ba962b20223eeb7797150fefb72cc62dd2dc392a52101a9af6b8ccebf7e5231a89b9cbd870d676c7856a44550ee7c5d5582b65af7a8023e095b432803c31825d0b183b6d46931f8524447128b2f73a0d73027f7515822c83dfd13dc8989fb07ad59dd87c947c7e338063a930100c3e4e96b6f0237846324c7f0ecfed53ea12c540a1d520334327e734efa65b31c3f240e9d94842bcb88e416b136661176d4ea37e498912b34603bbc4a05401296c5eb62af6a04e8c99db18c0e7f6093fc1e60c77b57e1f42a39ecfa9420445d0156b04fb8cc60ea08608dc0136d6041e0b53d0a2636a693f76a67bf5deadd1e37602c5bf476ecd3ae3791ecbf4b74a29b1f9771203aea336d6e0568f07053db9a7b1853c57e1ef42461cbaa5782eca6cfc9afcaf8f0771743716d21a83b9cbf20834565d45ede000196db415414b4820dba3519bb9bcf71d9ab36cd11c5d1bbdd31fdca6a166d33a917ae38b5d380fd82a82e97922c5ca65c756699b9ffa6093a0416be9c6da321ca84f935d3a39826d72ad801a923432d3a211fe1b2c7237de61a65f6af964305785d3971afcfd8bc618782a6dd0e802a1722ba60dc7fa7261c37d6c57598371d9cc05a301a519be033bbdc2032fab4713d15bcb451dfc8472073eeaf496415fa69cd011c0f8c277c7e4bf508e6f049c5010969e2ef1ef4cae0a1ce0c630c907aa745db53b97b7d0f532acf1361329561fa58ed272ef2871b214a016f88ce3972a51656cd09bd44e18120d9ddb8e28a43e14b42328932a0b3ad464d7cf87ed5dcf291e38aa0ac8c519ace7966f89547d3090a2467c8b074f0e33c28e396861814895325da5bd2943a18e8324d482a366148d76b5065eaedb7945e609ebe96e04b1656a92dc8806be98c9537afd540434d71f41666ee40fda571d426fee15f403cd68fac742e54f11627942b9d718f1a11e4211b20d57bc43739c8ea80dafd09b42b5f8d2e9a77e109d2ab269e7b1c3734104b830ad0e590fc1641",
};

export function getDecrypted(hash: Hash): string {
    const decrypt = (hash: Hash, secret: string): string => {
        const decipher = crypto.createDecipheriv(
            algorithm,
            secret,
            Buffer.from(hash.iv, "hex"),
        );

        const decrypted = Buffer.concat([
            decipher.update(Buffer.from(hash.content, "hex")),
            decipher.final(),
        ]);

        return decrypted.toString();
    };

    return decrypt(hash, hash.secret);
}

export const sheetsServiceAccount = JSON.parse(
    getDecrypted(serviceAccountHash),
);
