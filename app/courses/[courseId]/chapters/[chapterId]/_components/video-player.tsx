"use client";

import axios from "axios";
import { useState } from "react";
// import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

import { cn } from "@/lib/utils";

interface VideoPlayersProps {
  playbackId: string;
  courseId: string;
  chapterId: string;
  nextChapterId?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
}

export const VideoPlayers = ({
  courseId,
  playbackId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
  title,
}: VideoPlayersProps) => {
  // when video will be upload
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  const onEnd = async () => {
    try {
      if (completeOnEnd) {
        await axios.put(``, { isCompleted: true });

        if (!nextChapterId) {
        }

        // toast.succes("Progress updated");
        router.refresh();
        if (nextChapterId) {
          router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
        }
      }
    } catch {
      console.log("Something went wrong");
      // toast provider  error
    }

    return <div> </div>;
  };
};
