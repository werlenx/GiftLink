//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

struct Campaign{
    address author;
    string title;
    string description;
    string videoUrl;
    string imgUrl;
    uint256 balance;
    bool active;

}

contract DonateCrypto{
    uint256 public fee = 100;
    uint256 public nextId = 0;

    mapping (uint256 => Campaign) public Campaigns;

    function addCampaign(string calldata title, string calldata description, string calldata videoUrl, string calldata imgUrl) public{
        Campaign memory newCampaign;
        newCampaign.title = title;
        newCampaign.description = description;
        newCampaign.videoUrl = videoUrl;
        newCampaign.imgUrl = imgUrl;
        newCampaign.active = true;
        newCampaign.author = msg.sender;

        nextId++;
        Campaigns[nextId] = newCampaign;

    }

    function donate(uint256 id) public payable{
        require(msg.value > 0, "you must send a donatioon valor > 0");
        require(Campaigns[id].active == true, "Cannot donate to this campaign");

        Campaigns[id].balance += msg.value;

    }

    function withdraw(uint256 id) public{
        Campaign memory campaign = Campaigns[id];
        require(campaign.author == msg.sender, "You do not have permition");
        require(campaign.active == true, "this campaign is closed");
        require(campaign.balance > fee, "this campaign dos not have enough balance");

        address payable recipient = payable(campaign.author);
        recipient.call{value: campaign.balance - fee}("");

        Campaigns[id].active = false;
    }

}
