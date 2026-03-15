"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export function ContactSection() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<Partial<FormState>>({});
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = React.useState("");

  function validate(values: FormState) {
    const nextErrors: Partial<FormState> = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Please enter a valid email.";
    if (!values.message.trim()) nextErrors.message = "Please add a short message.";
    else if (values.message.trim().length < 20) nextErrors.message = "Please include a bit more detail (20+ characters).";

    return nextErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setMessage("Message queued successfully. This demo endpoint is ready to be replaced later.");
      setForm(initialState);
      setErrors({});
    } catch {
      setStatus("error");
      setMessage("Something went wrong while sending the message. Please email me directly for now.");
    }
  }

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Open to backend, platform, and data/ML new grad opportunities.</h2>
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          The contact block is intentionally simple: direct links plus a validated form stub that can be swapped for a real email or CRM workflow later.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Card>
            <CardContent className="space-y-6 p-8">
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <Link href={`mailto:${siteConfig.email}`} className="mt-2 inline-block text-muted-foreground transition hover:text-foreground">
                  {siteConfig.email}
                </Link>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <Link href={siteConfig.linkedin} className="mt-2 inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground">
                  <Linkedin className="size-4" aria-hidden="true" />
                  <span>Connect on LinkedIn</span>
                </Link>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <Link href={siteConfig.github} className="mt-2 inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground">
                  <Github className="size-4" aria-hidden="true" />
                  <span>View GitHub profile</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
        >
          <Card>
            <CardContent className="p-8">
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name ? (
                    <p id="name-error" className="text-sm text-red-500">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email ? (
                    <p id="email-error" className="text-sm text-red-500">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message ? (
                    <p id="message-error" className="text-sm text-red-500">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <>
                        <LoaderCircle className="size-4 animate-spin" />
                        Sending
                      </>
                    ) : (
                      "Send message"
                    )}
                  </Button>
                  <p aria-live="polite" className={status === "error" ? "text-sm text-red-500" : "text-sm text-muted-foreground"}>
                    {message}
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
