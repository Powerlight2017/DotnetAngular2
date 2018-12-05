using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using dotnetEtalon.Models;

namespace angularapp.Migrations
{
    [DbContext(typeof(DataBaseDotnetCoreContext))]
    partial class DataBaseDotnetCoreContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("angularapp.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<string>("Description")
                        .HasColumnName("_description")
                        .HasColumnType("varchar(250)");

                    b.Property<string>("Name")
                        .HasColumnName("_name")
                        .HasColumnType("varchar(250)");

                    b.HasKey("Id");

                    b.ToTable("Product");
                });
        }
    }
}
