export default class ExperienceableService {
  constructor(resource) {
    this.resource = resource;
  }

  async create(payload) {
    try {
      await window.fetch("/api/" + this.resource + "s/", {
        headers:{
          "accepts":"application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
        method: "post",
        body: JSON.stringify({
          [this.resource]: {
            "title": payload.title,
            "start_time": payload.startDate,
            "end_time": payload.endDate,
            "content": payload.content,
          }
        })
      }).then(response => {
        if (response.ok) {
          alert("Created successfully");
        }
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  async update(id, content) {
    try {
      await window.fetch("/api/" + this.resource + "s/" + id, {
        headers:{
          "accepts":"application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
        method: "put",
        body: JSON.stringify({
          [this.resource]: {
            "content": content,
          }
        })
      }).then(response => {
        if (response.ok) {
          alert("Saved successfully");
        }
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  async delete(id) {
    try {
      await window.fetch("/api/" + this.resource + "s/" + id, {
        headers:{
          "accepts":"application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
        method: "delete"
      }).then(response => {
        if (response.ok) {
          alert("Deleted successfully");
        }
      });
    }
    catch (e) {
      console.log(e);
    }
  }
}