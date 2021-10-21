import React from "react";

const AddNewMagazines = () => {
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add New Magazine</h1>

          <hr />

          <label for="MagazineName">
            <b>Magazine Name</b>
          </label>
          <input
            type="text"
            placeholder="Ex: Harper's Bazaar, Cosmopolitan UK, Hong Kong Tatler, Men's Health India"
            name="MagazineName"
            id="MagazineName"
            required
          />
          <hr />
          <label for="PublishingCompany">
            <b>Publishing Company</b>
          </label>
          <input
            type="text"
            placeholder="Select the company for which magazine is created"
            name="PublishingCompany"
            id="PublishingCompany"
            required
          />
          <hr />
          <label for="MagazineDescription">
            <b>Magazine Description</b>
          </label>
          <textarea
            id="MagazineDescription"
            name="MagazineDescription"
            rows="4"
            cols="50"
            placeholder="(maximum 2500 characters)This description will be shown to the magazine readers at the time of purchase to learn more about your magazine"
          ></textarea>
          <hr />
          <label for="PrimaryCategory">
            <b>Primary Category</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="If you do not find a suitable category then please email us contact@vaychayan.com)"
            name="PrimaryCategory"
            id="PrimaryCategory"
            required
          />

          <hr />
          <label for="SecondaryCategory">
            <b>Secondary Category</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="If you do not find a suitable category then please email us contact@vaychayan.com)"
            name="SecondaryCategory"
            id="SecondaryCategory"
            required
          />
          <hr />
          <label for="AgeRating">
            <b>Age Rating</b>
          </label><br/>
          <input
            type="number"
            placeholder="Publishers are advised to choose an age rating from the list based on the nature of content of the magazine"
            name="AgeRating"
            id="AgeRating"
            required
          />
          <hr />
         
          <label for="WebsiteUrl">
            <b>Website Url</b>
          </label>
          <input
            type="text"
            placeholder="Please enter your magazine website URL"
            name="WebsiteUrl"
            id="WebsiteUrl"
            required
          />
          <hr />
          <label for="Country">
            <b>Country/Region Publish From</b>
          </label>
          <input
            type="text"
            placeholder="Entre Country Name"
            name="Country"
            id="Country"
            required
          />
          <hr />
          <label for="Price">
            <b>Price Per Issue $</b>
          </label>
          <input
            type="text"
            placeholder="Entre Price Name"
            name="Price"
            id="Price"
            required
          />
          <hr />
          <label for="MagazineFrequency">
            <b>Magazine Frequency</b>
          </label>
          <input
            type="text"
            placeholder="Magazine Frequency"
            name="MagazineFrequency"
            id="MagazineFrequency"
            required
          />
          <hr />
          <label for="MagazineLanguage">
            <b>Magazine Language</b>
          </label>
          <input
            type="text"
            placeholder="Entre MagazineLanguage Name"
            name="MagazineLanguage"
            id="MagazineLanguage"
            required
          />
          <hr />

          <div className="btn">
            <button type="submit" className="Submit-btn">
              Submit
            </button>
            <button type="submit" className="Cancle-btn">
              Cancle
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddNewMagazines;
