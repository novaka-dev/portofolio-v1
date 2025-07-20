"use client";

import GitHubCalendar from "react-github-calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BorderBeam } from "../magicui/border-beam";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ShineBorder } from "../magicui/shine-border";

interface GitHubProfile {
  login: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
}

export default function GithubCard() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/novaka-dev")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch ">
      {/* Card kiri - Profile */}
      <div className="md:col-span-3 " >
        <Card className="relative overflow-hidden p-4 h-full">
          <ShineBorder shineColor={["#9333EA", "#BE185D"]} />

          <CardHeader className="text-center">
            <CardTitle>GitHub Profile</CardTitle>
            <CardDescription>{profile?.login}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4 flex-wrap">
            {profile && (
              <>
                <Image
                  src={profile.avatar_url}
                  alt="GitHub Avatar"
                  width={72}
                  height={72}
                  className="rounded-full"
                />
                <div className="">
                  <p className="text-sm ">{profile.bio}</p>
                  <p className="text-xs mt-2">
                    <strong>{profile.public_repos}</strong> Repositories
                    <br />
                    <strong>{profile.followers}</strong> Followers
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Card kanan - Calendar */}
      <div className="md:col-span-9">
        <Card className="relative overflow-hidden p-4 h-full">
          <CardHeader>
            <CardTitle>Contribution Calendar</CardTitle>
            <CardDescription>Past year contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden">
              <GitHubCalendar
                username="novaka-dev"
                blockSize={10}
                blockMargin={4}
                colorScheme="dark"
                style={{ width: "100%" }}
              />
            </div>
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </div>
    </div>
  );
}
