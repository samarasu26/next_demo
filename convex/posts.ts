// convex/posts.ts or similar file

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { authComponent } from "./auth"; // Adjust path as necessary

export const createPost = mutation({
  args: {
   


    title: v.string(),
    content: v.string(),
    imageStorageId : v.id("_storage")
  
  },
  handler: async (ctx, args) => {
    // Get the authenticated user's identity
  

    // Use the identity to find the user in your 'users' table
    // (Assuming you have a 'users' table and have linked Convex and Better Auth properly)
    const user = await authComponent.safeGetAuthUser(ctx)

    if (!user) {
        throw new Error("User not found in database");
    }
  
    // You now have the user's information and can create the blog post
    const blogArticle = await ctx.db.insert("posts", {
      
      //#endregion
      title: args.title,
      body: args.content,
      authorId  :  user._id,
      imageStorageId : args.imageStorageId
      
      
      // Link the post to the user
    });

    return blogArticle
  },
});


export const getPosts = query({
   

  args : {},

  handler : async(ctx)=>{

    const posts = await ctx.db.query("posts").order("desc").collect()


    return await  Promise.all(


      posts.map(async(post)=>{


        const resolvedImageUrl =  post.imageStorageId !== undefined?

        await ctx.storage.getUrl(post.imageStorageId) : null



        return {
          ...post,
          imageUrl: resolvedImageUrl,
        };


        



      })


      




    )    

    }

   


})

export const generateImageUploadUrl = mutation({


  args : {},

  handler : async(ctx)=>{


    const user = await authComponent.safeGetAuthUser(ctx)

    if(!user) {

      throw new Error("user not authenticated")
    }

    return await ctx.storage.generateUploadUrl()

  }


})

 export const getPostById = query({

  args  :  {

    id : v.id("posts")



  }, 

  handler : async(ctx, args)=>{


    const post = await ctx.db.get(args.id)

    if(!post){

      return null
    }

    const resolvedImageurl =
      post.imageStorageId !== undefined
        ? await ctx.storage.getUrl(post.imageStorageId)
        : null;


    return {

      ...post,
      
      imageUrl : resolvedImageurl

    }

  }



})