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
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const projects = [
  {
    title: "中小企業向け案件受注システム",
    description:
      "中小企業の案件管理を効率化するWebアプリケーション。案件の進捗管理、顧客管理、請求書管理などの機能を実装。",
  },
  {
    title: "百貨店の通販サイト",
    description:
      "高級感のあるデザインと使いやすさを両立したECサイト。商品検索、カート機能、決済システムなどを実装。",
  },
  {
    title: "大企業向け労務管理システム",
    description:
      "従業員の勤怠管理、給与計算、休暇申請などを統合的に管理するシステム。セキュリティと使いやすさを重視した設計。",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBgColor = useColorModeValue("purple.50", "gray.700");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("お問い合わせを受け付けました。");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container maxW="container.xl" py={10}>
      {/* 自己紹介セクション */}
      <Box mb={20}>
        <Heading as="h1" size="2xl" mb={6} color="purple.600">
          フロントエンドエンジニア
        </Heading>
        <Text fontSize="xl" color="gray.600">
          ユーザー体験を重視した、美しく使いやすいWebアプリケーションの開発を得意としています。
          React、TypeScript、Next.jsなどのモダンな技術スタックを使用し、
          パフォーマンスと保守性の高いコードを書くことを心がけています。
        </Text>
      </Box>

      {/* プロジェクトセクション */}
      <Box mb={20}>
        <Heading as="h2" size="xl" mb={8} color="purple.600">
          プロジェクト
        </Heading>
        <Box position="relative" h="300px">
          <AnimatePresence mode="wait">
            <MotionBox
              key={currentProjectIndex}
              position="absolute"
              w="100%"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                p={8}
                bg={bgColor}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="lg"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{ bg: hoverBgColor }}
              >
                <Heading as="h3" size="md" mb={4} color="purple.600">
                  {projects[currentProjectIndex].title}
                </Heading>
                <Text color="gray.600">
                  {projects[currentProjectIndex].description}
                </Text>
              </Box>
            </MotionBox>
          </AnimatePresence>
        </Box>
      </Box>

      {/* お問い合わせフォーム */}
      <Box>
        <Heading as="h2" size="xl" mb={8} color="purple.600">
          お問い合わせ
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Box>
              <Text mb={2} color="gray.600">
                お名前
              </Text>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="山田 太郎"
                required
                borderColor={borderColor}
                _hover={{ borderColor: "purple.400" }}
                _focus={{ borderColor: "purple.500" }}
              />
            </Box>
            <Box>
              <Text mb={2} color="gray.600">
                メールアドレス
              </Text>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@email.com"
                required
                borderColor={borderColor}
                _hover={{ borderColor: "purple.400" }}
                _focus={{ borderColor: "purple.500" }}
              />
            </Box>
            <Box>
              <Text mb={2} color="gray.600">
                メッセージ
              </Text>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="お問い合わせ内容を入力してください"
                rows={6}
                required
                borderColor={borderColor}
                _hover={{ borderColor: "purple.400" }}
                _focus={{ borderColor: "purple.500" }}
              />
            </Box>
            <Button
              type="submit"
              colorScheme="purple"
              size="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
              transition="all 0.3s"
            >
              送信する
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
