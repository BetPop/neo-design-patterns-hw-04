export class DocumentBuilder {
    private header = "";
    private body = "";
    private footer = "";
  
    addHeader(header: string): this {
      this.header = `=== ${header} ===`;
      return this;
    }
  
    addBody(body: string): this {
      this.body = body;
      return this;
    }
  
    addFooter(footer: string): this {
      this.footer = footer;
      return this;
    }
  
    build(): string {
      return [this.header, "", this.body, "", this.footer].join("\n");
    }
  }
  