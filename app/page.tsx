"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにフォーム送信のロジックを実装
    alert("お問い合わせを受け付けました。");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container maxW="container.xl" py={10}>
      {/* 自己紹介セクション */}
      <Box mb={20}>
        <Heading as="h1" size="2xl" mb={6}>
          フロントエンドエンジニア
        </Heading>
        <Text fontSize="xl">
          ユーザー体験を重視した、美しく使いやすいWebアプリケーションの開発を得意としています。
          React、TypeScript、Next.jsなどのモダンな技術スタックを使用し、
          パフォーマンスと保守性の高いコードを書くことを心がけています。
        </Text>
      </Box>

      {/* プロジェクトセクション */}
      <Box mb={20}>
        <Heading as="h2" size="xl" mb={8}>
          プロジェクト
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          <Box p={6} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md" mb={4}>
              中小企業向け案件受注システム
            </Heading>
            <Text>
              中小企業の案件管理を効率化するWebアプリケーション。
              案件の進捗管理、顧客管理、請求書管理などの機能を実装。
            </Text>
          </Box>
          <Box p={6} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md" mb={4}>
              百貨店の通販サイト
            </Heading>
            <Text>
              高級感のあるデザインと使いやすさを両立したECサイト。
              商品検索、カート機能、決済システムなどを実装。
            </Text>
          </Box>
          <Box p={6} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md" mb={4}>
              大企業向け労務管理システム
            </Heading>
            <Text>
              従業員の勤怠管理、給与計算、休暇申請などを統合的に管理するシステム。
              セキュリティと使いやすさを重視した設計。
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* お問い合わせフォーム */}
      <Box>
        <Heading as="h2" size="xl" mb={8}>
          お問い合わせ
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Box>
              <Text mb={2}>お名前</Text>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="山田 太郎"
                required
              />
            </Box>
            <Box>
              <Text mb={2}>メールアドレス</Text>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@email.com"
                required
              />
            </Box>
            <Box>
              <Text mb={2}>メッセージ</Text>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="お問い合わせ内容を入力してください"
                rows={6}
                required
              />
            </Box>
            <Button type="submit" colorScheme="blue" size="lg">
              送信する
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
