import React, { useEffect } from 'react';

export default function login() {
  return <div></div>;
}

const Wrapper = tw.div`\
flex flex-col h-screen w-screen bg-gray-200 p-4
`

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full
`
const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`

const Title = tw.div`
text-5xl pt-4 text-gray-500
`

const HeadImage = tw.img`
w-auto object-contain
`