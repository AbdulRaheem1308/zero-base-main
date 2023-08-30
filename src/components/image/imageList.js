import React from "react";

import Assets from "../../assets";

import { isURL } from "../utils";

const ImageList = {
    icBackWhite: Assets.icBackWhite,
    icBackBlack: Assets.icBackBlack,
    propertyChatIcon: Assets.propertyChatIcon,
    icCloseWhite: Assets.icCloseWhite,
    icCloseBlack: Assets.icCloseBlack,
    icMoreBlack: Assets.icMoreBlack,
    icMoreWhite: Assets.icMoreWhite,

    // ssl_hand: Assets.images.ssl_hand,
    // ssl_approve: Assets.images.ssl_approve,
    // ssl_pending: Assets.images.ssl_pending,
    // ssl_rejected: Assets.images.ssl_rejected,
    // ssl_delivery: Assets.images.ssl_delivery,
    // ssl_clipboard: Assets.images.ssl_clipboard,
    // ssl_megaphone: Assets.images.ssl_megaphone,
    // ssl_info: Assets.images.ssl_info,
    // headerClose: Assets.images.headerClose,
    // photoCamera: Assets.images.photoCamera,
};

// export default ImageList;

export const getImage = (value) => {
    if (isURL(value)) return { uri: value };
    //return ImageList[value] ?? null;
    return Assets[value] ?? null;
};
