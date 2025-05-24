import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">註冊帳號</CardTitle>
          <CardDescription>
            建立您的新帳號，加入我們的平台。
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">姓名</Label>
            <Input id="name" placeholder="請輸入您的姓名" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">電子郵件</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">密碼</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">確認密碼</Label>
            <Input id="confirm-password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <Button className="w-full">註冊</Button>
          <div className="text-sm text-muted-foreground">
            已經有帳號了？ 
            <Link href="/login" className="text-primary hover:underline ml-1">
              登入
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}