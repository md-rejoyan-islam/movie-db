"use client";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import Image from "next/image";

const url = process.env.NEXT_PUBLIC_SITE_URL;

export const CustomFacebookShareButton = ({ id, movie }) => {
  return (
    <FacebookShareButton
      url={`${url}/movie/${id}`}
      title={movie?.title}
      quote={movie?.overview}
    >
      <div className="text-center cursor-pointer">
        <Image
          src="http://facebook.com/favicon.ico"
          alt="Facebook"
          className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          width={200}
          height={300}
        />
        <p className="text-sm">Facebook</p>
      </div>
    </FacebookShareButton>
  );
};

export const CustomTwitterShareButton = ({ id, movie }) => {
  return (
    <TwitterShareButton url={`${url}/movie/${id}`} title={movie?.title}>
      <div className="text-center cursor-pointer">
        <Image
          src="http://x.com/favicon.ico"
          alt="Facebook"
          className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          width={200}
          height={300}
        />
        <p className="text-sm">X</p>
      </div>
    </TwitterShareButton>
  );
};

export const CustomLinkedinShareButton = ({ id, movie }) => {
  return (
    <LinkedinShareButton
      url={`${url}/movie/${id}`}
      title={movie?.title}
      quote={movie?.overview}
    >
      <div className="text-center cursor-pointer">
        <Image
          src="http://linkedin.com/favicon.ico"
          alt="Facebook"
          className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          width={200}
          height={300}
        />
        <p className="text-sm">Linkedin</p>
      </div>
    </LinkedinShareButton>
  );
};
