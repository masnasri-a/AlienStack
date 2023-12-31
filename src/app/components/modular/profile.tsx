"use client";
import { Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Profile = (props: any) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.data);
      });
  },[]);
  return (
    <div>
      {props.isActive ? (
        <Flex gap={2} cursor={'pointer'}>
          <Image
            borderRadius={25}
            width={50}
            height={50}
            objectFit={"cover"}
            src={data ? (data as any).images : "https://bit.ly/dan-abramov"}
            alt="Profile Picture"
          />
          <div className="sides">
            <div className="name">{data ? (data as any).name : "Username"}</div>
            <div>{data ? (data as any).position : "Freelance"}</div>
          </div>
        </Flex>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;
