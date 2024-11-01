import { Box, Text, Image, Button, Input } from "@chakra-ui/react";

export default function CampaignsList({ campaigns }) {
  return (
    <Box p={6}>
      <Input placeholder="Buscar campanhas" mb={4} />
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={6}>
        {campaigns.map(campaign => (
          <Box 
            key={campaign.id} 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="lg" 
            p={4} 
            bg="gray.800" 
            color="white"
          >
            <Image src={campaign.imgUrl} alt={campaign.title} />
            <Text fontSize="xl" fontWeight="bold" mt={2}>{campaign.title}</Text>
            <Text mt={2}>{campaign.description}</Text>
            <Text mt={2} color="green.300">Arrecadado: {campaign.balance} ETH</Text>
            <Button mt={4} colorScheme="teal">Doar</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
