"use client";
import React, { useState } from "react";
import Icons from "./Icons";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import Reveal from "./Reveal";

const Contact = () => {
  const { toast } = useToast();

  const [email, setEmail] = useState<string | null>("");
  const [name, setName] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && name && message) {
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICEID as string,
          process.env.NEXT_PUBLIC_TEMPLATE as string,
          {
            from_name: name,
            to_name: "Roshdy",
            from_email: email,
            to_email: "developerroshdy@gmail.com",
            message,
          },
          process.env.NEXT_PUBLIC_PKEY as string
        );
        toast({
          title: "Thank You. I will get back to you as soon as possible",
        });
      } catch (error) {
        toast({ title: "opps.. Please try again" });
      }
    }
    setEmail("");
    setName("");
    setMessage("");
  };
  const text = "Let's"
  return (
    <section
      id="contact"
      className="container flex flex-col lg:flex-row  items-center justify-center lg:justify-around h-screen my-4 space-y-5"
    >
      <div className="flex flex-col items-start italic  tracking-tighter leading-tight">
        <Reveal>
          <h3 className="text-5xl md:text-7xl lg:text-9xl">{text}</h3>
        </Reveal>
        <Reveal>
          <h3 className=" text-5xl md:text-7xl lg:text-9xl pl-10">Get in</h3>
        </Reveal>
        <Reveal>
          <h3 className="text-5xl md:text-7xl lg:text-9xl">Touch</h3>
        </Reveal>
        <Icons height="25px" />
      </div>

      <form
        className="min-w-[50%] max-w-[80%] space-y-5 text-secondary font-light"
        onSubmit={handleSubmit}
      >
        <div className="">
          <Label htmlFor="name">Your Name</Label>
          <Input
            placeholder="Name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="border-b-2 border-b-secondary/70 outline-none  "
          />
        </div>
        <div className="">
          <Label htmlFor="email">Your Name</Label>
          <Input
            placeholder="Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-b-2 border-b-secondary/70 outline-none  "
          />
        </div>
        <div className=" ">
          <Label className="" htmlFor="message">
            Your Message
          </Label>

          <Textarea
            placeholder="Message"
            id="name"
            onChange={(e) => setMessage(e.target.value)}
            className="border-b-2 border-b-secondary/70 outline-none  "
          />
        </div>
        <Button variant={"ghost"} type="submit">
          Send your Message
        </Button>
      </form>
    </section>
  );
};

export default Contact;
