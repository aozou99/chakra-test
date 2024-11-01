'use client';

import { cardData } from '@/app/_constants/cards';
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Flex,
    Heading,
    IconButton,
    Image,
    Progress,
    SimpleGrid,
    Stack,
    Stat,
    StatArrow,
    StatHelpText,
    StatLabel,
    StatNumber,
    Tag,
    TagLabel,
    TagLeftIcon,
    Text,
    Tooltip,
} from '@chakra-ui/react';
import { FaBookmark, FaComment, FaHeart, FaShare } from 'react-icons/fa';

export default function CardsPage() {
    return (
        <Box p={8}>
            <Heading mb={6}>カード一覧</Heading>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                {cardData.map((card) => (
                    <Card key={card.id} overflow='hidden'>
                        <CardHeader>
                            <Flex gap='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name={card.author.name} src={card.author.avatar} />
                                    <Box>
                                        <Heading size='sm'>{card.author.name}</Heading>
                                        <Text>投稿者</Text>
                                    </Box>
                                </Flex>
                                <IconButton
                                    variant='ghost'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                    icon={<FaBookmark />}
                                />
                            </Flex>
                        </CardHeader>
                        <Image src={card.imageUrl} alt={card.title} height='200px' objectFit='cover' />
                        <CardBody>
                            <Stack spacing='4'>
                                <Heading size='md'>{card.title}</Heading>
                                <Text>{card.description}</Text>
                                <Progress value={card.progress} colorScheme='green' />
                                <Stat>
                                    <StatLabel>価格</StatLabel>
                                    <StatNumber>¥{card.price.toLocaleString()}</StatNumber>
                                    <StatHelpText>
                                        <StatArrow type={card.priceChange > 0 ? 'increase' : 'decrease'} />
                                        {Math.abs(card.priceChange).toFixed(1)}%
                                    </StatHelpText>
                                </Stat>
                                <Stack direction='row' flexWrap='wrap' spacing={2}>
                                    {card.tags.map((tag) => (
                                        <Tag key={tag} size='md' variant='subtle' colorScheme='cyan'>
                                            <TagLeftIcon boxSize='12px' as={FaBookmark} />
                                            <TagLabel>{tag}</TagLabel>
                                        </Tag>
                                    ))}
                                </Stack>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Tooltip label={`${card.stats.likes} いいね`}>
                                    <Button variant='ghost' leftIcon={<FaHeart />}>
                                        {card.stats.likes}
                                    </Button>
                                </Tooltip>
                                <Tooltip label={`${card.stats.comments} コメント`}>
                                    <Button variant='ghost' leftIcon={<FaComment />}>
                                        {card.stats.comments}
                                    </Button>
                                </Tooltip>
                                <Tooltip label={`${card.stats.shares} シェア`}>
                                    <Button variant='ghost' leftIcon={<FaShare />}>
                                        {card.stats.shares}
                                    </Button>
                                </Tooltip>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    );
}
